import { useState } from "react";
import './styles.css'
import {
    Label,
    RadioGroup,
    RadioGroupItem,
} from "../../components/Others/MixComponents";
import { Link } from "react-router-dom";

const questions = [
    {
        question: "Você gostaria de trabalhar com jogos ou sistemas web?",
        options: [
            { label: "Jogos", value: "jogos" },
            { label: "Sistemas Web", value: "sistemas" },
        ],
    },
    {
        question: "Você tem interesse em desenvolver aplicações para web?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você gostaria de trabalhar com APIs REST ou GraphQL?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você gosta de ter controle sobre ponteiros e memória?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você prefere produtividade rápida e menos preocupação com tipos?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você gosta de linguagens fortemente tipadas?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você gostaria de desenvolver apps desktop no Windows com GUI nativa?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você se interessa por desenvolvimento multiplataforma com .NET?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você gostaria de interagir com hardware ou embarcados?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você quer entrar rápido no mercado com backend moderno?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você valoriza uma linguagem com comunidade open source forte?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
    {
        question: "Você busca performance extrema e controle do sistema?",
        options: [
            { label: "Sim", value: "sim" },
            { label: "Não", value: "nao" },
        ],
    },
];

export default function LanguageRecommendationForm() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(""));
    const [result, setResult] = useState(null);

    const handleChange = (index, value) => {
        const updated = [...answers];
        updated[index] = value;
        setAnswers(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const scores = { "C++": 0, "C#": 0, Node: 0 };

        answers.forEach((a, i) => {
            switch (i) {
                case 0:
                    a === "jogos" ? scores["C++"]++ : scores["Node"]++;
                    break;
                case 1:
                    a === "sim" ? scores["Node"]++ : null;
                    break;
                case 2:
                    a === "sim" ? scores["Node"]++ : null;
                    break;
                case 3:
                    a === "sim" ? scores["C++"]++ : scores["Node"]++;
                    break;
                case 4:
                    a === "sim" ? scores["Node"]++ : scores["C#"]++;
                    break;
                case 5:
                    a === "sim" ? scores["C#"]++ : scores["Node"]++;
                    break;
                case 6:
                    a === "sim" ? scores["C#"]++ : null;
                    break;
                case 7:
                    a === "sim" ? scores["C#"]++ : null;
                    break;
                case 8:
                    a === "sim" ? scores["C++"]++ : null;
                    break;
                case 9:
                    a === "sim" ? scores["Node"]++ : scores["C#"]++;
                    break;
                case 10:
                    a === "sim" ? scores["Node"]++ : scores["C#"]++;
                    break;
                case 11:
                    a === "sim" ? scores["C++"]++ : scores["Node"]++;
                    break;
            }
        });

        const recommended = Object.entries(scores).reduce((a, b) =>
            b[1] > a[1] ? b : a
        )[0];
        setResult(recommended);
    };

    return (
        <div className="form-language">
            <h1>Qual linguagem você deve aprender?</h1>
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl">
                {questions.map((q, i) => (
                    <div className="form-card" key={i}>
                        <div className="question">{q.question}</div>
                        <RadioGroup onValueChange={(val) => handleChange(i, val)} className="radio-group">
                            {q.options.map((opt) => (
                                <div key={opt.value} className="radio-option">
                                    <RadioGroupItem value={opt.value} id={`q${i}-${opt.value}`} />
                                    <Label htmlFor={`q${i}-${opt.value}`}>{opt.label}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                ))}

                <button type="submit">Ver Resultado</button>
            </form>

            {result && (
                <div className="result">
                    Recomendamos que você estude <strong>{result}</strong>!
                    {result === "C++" && (
                        <p>
                            C++ é ideal para quem gosta de controle de baixo nível e performance.
                        </p>
                    )}
                    {result === "C#" && (
                        <p>
                            C# é excelente para desenvolvimento de aplicações desktop e web com .NET.
                        </p>
                    )}
                    {result === "Node" && (
                        <p>
                            Node.js é perfeito para quem quer entrar rápido no mercado com desenvolvimento web moderno.
                        </p>
                    )}
                    <Link to={`/courses#${result.toLowerCase()}`} className="learn-more">
                        Ver Cursos
                    </Link>
                </div>
            )}
        </div>
    );
}
