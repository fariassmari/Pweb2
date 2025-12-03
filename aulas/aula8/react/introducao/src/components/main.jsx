import { investments } from "@/data";
import InvestmentCard from "./investmentCard";

export default function Main({ showValue }) {
    
    return (
        <>
            {/* Cards de Investimentos */ }
            <div id="investments-cards" className="investments grid grid-cols-3 gap-3">
                { investments.map( 
                    investment => <InvestmentCard key={investment.id} investment={investment} showValue={showValue}/>
                )}
                
                {/* <InvestmentCard investment={investments[0]} />
                <InvestmentCard investment={investments[1]} /> */}

            </div>
        </>
    );
}