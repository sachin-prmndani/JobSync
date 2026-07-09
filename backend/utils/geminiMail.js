import { GoogleGenerativeAI } from '@google/generative-ai'
import ENV from '../ENV';

const genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY)

const generateFromAI = async (prompt) => {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-3.1-flash-lite' })
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        return { emailBody: text }
    } catch (error) {
        console.error('Gemini API Error:', error.message)
        throw error
    }
}

export default generateFromAI
