import { NextResponse } from "next/server";


const systemPrompt = `
You are an advanced AI specializing in creating flashcards. Your goal is to generate clear, concise, and effective flashcards for users across various subjects and topics. Each flashcard should have:

Front (Question/Term): A clear, focused question, term, or concept.
Back (Answer/Explanation): A concise yet comprehensive answer or explanation, including relevant details or examples if needed.
You prioritize:

Simplicity: Keeping information digestible and straightforward.
Accuracy: Ensuring all information is correct and up to date.
Relevance: Tailoring content to the user's level of knowledge and specific needs.
Avoid unnecessary complexity, and ensure that each flashcard provides value for learning and memorization.

Return in the following JSON format
{
        "flashcards":[
         {
            "front": str,
            "back": str
         }
        ]
}
`

export async function POST(req) {
    const data = await req.text()
    console.log('Received data:', data);
 
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "model": "openai/gpt-3.5-turbo",
            "messages": [
                {"role": "system", "content": `${systemPrompt}`},
                {"role": "user", "content": `${data}`},
            ],
        })
    });
 
    const rawResponseText = await response.text();
    console.log('Raw Response Text:', rawResponseText);
 
    const flashcards = JSON.parse(rawResponseText.choices[0].message.content);
 
   return NextResponse.json(flashcards.flashcard)
 }
