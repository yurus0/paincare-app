'use client';
import React, { useState } from 'react';
import PainEvolutionService from '../services/PainEvolutionService';

interface PainFormData {
    score: number;
    painLocations: string[];
    painWorseningFactors: string[];
    symptoms: string[];
    feelings: string[];
}

const PainEvolutionForm: React.FC = () => {
    const [formData, setFormData] = useState<PainFormData>({
        score: 5,
        painLocations: [],
        painWorseningFactors: [],
        symptoms: [],
        feelings: [],
    });

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        score: Number(event.target.value),
        });
    };

    const handleCheckboxChange = (
        field: keyof PainFormData,
        value: string,
        checked: boolean
    ) => {
        if (Array.isArray(formData[field])) {
            if (checked) {
                setFormData({
                    ...formData,
                    [field]: [...(formData[field] as string[]), value],
                });
            } else {
                setFormData({
                    ...formData,
                    [field]: (formData[field] as string[]).filter((v) => v !== value),
                });
            }
        }
    };
    
    
    const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();
        
            try {
              // Assuming you have an endpoint to handle the form data
                await PainEvolutionService.savePainEvolution(formData);
        
              // Optionally, you can reset the form after successful submission
                setFormData({
                score: 5,
                painLocations: [],
                painWorseningFactors: [],
                symptoms: [],
                feelings: [],
                });
        
                console.log('Form submitted successfully!');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        };

    return (
    <div>
        <h2>Pain Evolution Form</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Pain Level: {formData.score}
            <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={formData.score}
                onChange={handleSliderChange}
            />
            </label>
        </div>

        <div>
            <h3>Pain Locations</h3>
            {['Abdomen', 'Back', 'Chest', 'Head', 'Neck', 'Hips'].map((location) => (
            <label key={location}>
                <input
                type="checkbox"
                value={location}
                checked={formData.painLocations ? formData.painLocations.includes(location) : false}
                onChange={(e) =>
                    handleCheckboxChange('painLocations', location, e.target.checked)
                }
                />
                {location}
            </label>
            ))}
        </div>

        <div>
            <h3>What Makes Pain Worse?</h3>
            {[
            'Lack of sleep',
            'Prolonged sitting',
            'Extended standing',
            'Stressful situations',
            'Walking for extended periods',
            ].map((factor) => (
            <label key={factor}>
                <input
                type="checkbox"
                value={factor}
                checked={formData.painWorseningFactors? formData.painWorseningFactors.includes(factor): false}
                onChange={(e) =>
                    handleCheckboxChange('painWorseningFactors', factor, e.target.checked)
                }
                />
                {factor}
            </label>
            ))}
        </div>

        <div>
            <h3>Symptoms</h3>
            {['Cramps', 'Tenderness in breasts', 'Headaches', 'Acne', 'Fatigue'].map(
            (symptom) => (
                <label key={symptom}>
                <input
                    type="checkbox"
                    value={symptom}
                    checked={formData?.symptoms.includes(symptom)}
                    onChange={(e) =>
                    handleCheckboxChange('symptoms', symptom, e.target.checked)
                    }
                />
                {symptom}
                </label>
            )
            )}
        </div>

        <div>
            <h3>Feelings</h3>
            {['Anxiety', 'Depression', 'Dizziness', 'Vomiting', 'Diarrhea'].map(
            (feeling) => (
                <label key={feeling}>
                <input
                    type="checkbox"
                    value={feeling}
                    checked={formData?.feelings.includes(feeling)}
                    onChange={(e) =>
                    handleCheckboxChange('feelings', feeling, e.target.checked)
                    }
                />
                {feeling}
                </label>
            )
            )}
        </div>
        <div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    );
};

export default PainEvolutionForm;
