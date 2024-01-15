'use client';
import { CategoryScale, Chart, LineController, LineElement, LinearScale, PointElement, Title } from 'chart.js';
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import PainEvolutionService from "../services/PainEvolutionService";

const PainEvolutionGraph = () => {

    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
    const [painData, setPainData] = React.useState<any[]>();
    const [Data, setData] = React.useState({
        labels: [],
        datasets: [
            {
            label: 'Pain Level',
            data: [],
            fill: false,
            backgroundColor: 'rgb(236, 72, 153)',
            borderColor: 'rgba(236, 72, 153, 0.2)',
            },
        ],
    });
    
    const fetchData = async () => {
        try {
            const res = await PainEvolutionService.getPainEvolutions();
            const painData = res.data;
            const data = {
            labels: painData?.map((paindata: any) => new Date(paindata.dateCreated)),
            datasets: [
                {
                label: 'Pain Level',
                data: painData?.map((paindata: any) => paindata.score),
                fill: false,
                backgroundColor: 'rgb(236, 72, 153)',
                borderColor: 'rgb(236, 72, 153, 0.2)',
                },
            ],
            };
            console.log(painData);
            setPainData(painData);
            console.log(data);
            setData(data as any);
        } catch (error) {
            console.log(error);
        }
        };
    
    useEffect(() => {
        fetchData();
        }, []);
    
    useEffect(() => {
        console.log("Data");
        console.log(Data);
    }, [Data]);
    
    return (
        <div >
            <div className='bg-white p-6 rounded-lg shadow-md'>
                <Line data={Data} />
            </div>
        </div>
    );
};
    
export default PainEvolutionGraph;
    