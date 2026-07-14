import mammoth from 'mammoth'

export const extractTextFromFile = async (file) => {
    if (!file) return ''

    if (file.mimetype === 'application/pdf') {
        const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs')
        const loadingTask = pdfjsLib.getDocument({
            data: file.buffer,
            useWorkerFetch: false,
            disableWorker: true,
            isEvalSupported: false,
        })

        const pdf = await loadingTask.promise
        let text = ''

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum)
            const content = await page.getTextContent()
            const pageText = content.items.map((item) => item.str).join(' ')
            text += `${pageText}\n`
        }

        return text.trim()
    }

    if (
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
        const result = await mammoth.extractRawText({
            buffer: file.buffer,
        })
        return result.value
    }

    throw new Error('Unsupported file type')
}
