import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import 'dotenv/config';

export async function getSummary(fcers: string[], leaderboard: string, bestaccers: string[], best_acc: number): Promise<string> {
    const accerString = bestaccers.join(", ");
    const fcerString = fcers.length!=0?fcers.join(", "):'No one';
    const prompt = ChatPromptTemplate.fromMessages([
            ["system", "You are a commentator for an osu! match."],
            ["human", `Use the following information to provide a summary of the match. The leaderboard provided is in order of rankings. Don't reveal score. Don't reveal combo. Keep in mind that usage of mods make it harder to score for that player. If any player gets full combo(FC) mention it. At the end mention who got the highest accuracy. Say only what is needed and in less than 40 words.
            Leaderboard:{leaderboard}
            Players who got FC: {fcerString}
            Highest accuracy: {best_acc}% by {accerString}`]
    ])
    const llm = new ChatOpenAI({ modelName: "gpt-3.5-turbo", temperature: 0 });

    const chain =prompt.pipe(llm).pipe(new StringOutputParser());

    const summary = await chain.invoke({
        leaderboard:leaderboard,
        fcerString:fcerString,
        best_acc:best_acc,
        accerString:accerString
    });
    return summary;
}


