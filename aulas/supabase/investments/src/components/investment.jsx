import { useEffect, useState } from 'react';
import Storage from '@storage';


export default function Investments() {
    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        loadInvestments();
    },[]);

    async function loadInvestments(){
        try {
            setLoading(true);
            const data = await Storage.read('investments');
            setInvestments(data);
        }catch (err){
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }

    return (
            <div>
            <h1>Investimentos</h1>

            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}

            <ul>
                {investments.map((inv) => (
                <li key={inv.id}>
                    {inv.name} - R$ {inv.value}
                </li>
                ))}
            </ul>
            </div>
        );
        }