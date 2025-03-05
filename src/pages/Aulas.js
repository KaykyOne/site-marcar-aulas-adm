import React, { useState } from "react";
import ListGridToggle from "../components/ListGrid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse, format, addMinutes, isBefore, isAfter } from 'date-fns';
import Menu from '../components/Menu';

export default function Aulas() {
    const instrutores = [
        { id: 1, nome: "Roberto" },
        { id: 2, nome: "Carlos" },
        { id: 3, nome: "Hime" }
    ];

    const [selectedInstrutorId, setSelectedInstrutorId] = useState(instrutores[0].id);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const horarios = [
        { id_instrutor: 1, hora_inicio_almoco: '12:50:00', hora_fim_almoco: '14:40:00', hora_inicio: '07:00:00', hora_fim: '18:00:00' },
    ]

    const CalcHoras = (horario, agendamentos, dataSelecionada) => {
        const inicioExpediente = parse(horario.hora_inicio, 'HH:mm:ss', new Date());
        const fimExpediente = parse(horario.hora_fim, 'HH:mm:ss', new Date());
        const inicioAlmoco = parse(horario.hora_inicio_almoco, 'HH:mm:ss', new Date());
        const fimAlmoco = parse(horario.hora_fim_almoco, 'HH:mm:ss', new Date());

        let horariosLivres = [];
        let horaAtual = inicioExpediente;

        while (isBefore(horaAtual, fimExpediente)) {
            const proximoHorario = addMinutes(horaAtual, 50);

            // Verifica se o horário não está dentro do almoço
            if (isBefore(proximoHorario, inicioAlmoco) || isAfter(proximoHorario, fimAlmoco)) {
                horariosLivres.push(format(horaAtual, 'HH:mm:ss'));
            }

            horaAtual = proximoHorario;
        }

        // Filtrar horários ocupados
        const horariosOcupados = agendamentos
            .filter(aula => aula.Data === dataSelecionada && aula.Instrutor_id === horario.id_instrutor)
            .map(aula => aula.Hora);

        // Retorna horários livres sem os ocupados
        return horariosLivres.filter(hora => !horariosOcupados.includes(hora));
    };

    const columns = [
        { field: "ID", headerName: "ID", width: 80 },
        { field: "Data", headerName: "Data", width: 150 },
        { field: "Hora", headerName: "Hora", width: 150 },
        { field: "Aluno", headerName: "Aluno", width: 100 },
        { field: "Aluno_id", headerName: "Aluno_id", width: 100 },
        { field: "Instrutor_id", headerName: "Instrutor_id", width: 100 },
    ];

    const rows = [
        { ID: 1, Data: "2025/03/01", Hora: "07:00", Aluno: "João Silva", Aluno_id: 1, Instrutor_id: 1 },
        { ID: 2, Data: "2025/03/01", Hora: "09:30", Aluno: "Maria Oliveira", Aluno_id: 2, Instrutor_id: 2 },
        { ID: 3, Data: "2025/03/01", Hora: "10:00", Aluno: "Carlos Pereira", Aluno_id: 3, Instrutor_id: 3 },
        { ID: 4, Data: "2025/03/02", Hora: "14:00", Aluno: "Ana Costa", Aluno_id: 4, Instrutor_id: 1 },
        { ID: 5, Data: "2025/03/02", Hora: "15:00", Aluno: "Lucas Santos", Aluno_id: 5, Instrutor_id: 2 },
        { ID: 6, Data: "2025/03/02", Hora: "16:00", Aluno: "Fernanda Alves", Aluno_id: 6, Instrutor_id: 3 },
    ];

    // Obtem o horário do instrutor selecionado
    const horariosInstrutor = horarios.find(h => h.id_instrutor === selectedInstrutorId);

    // Formatar a data selecionada no mesmo formato do banco
    const selectedDateFormatted = format(selectedDate, "yyyy/MM/dd");

    // Filtra as aulas do instrutor selecionado e da data escolhida
    const filteredRows = rows.filter(row =>
        row.Instrutor_id === selectedInstrutorId && row.Data === selectedDateFormatted
    );

    // Obtém os horários disponíveis para o instrutor selecionado
    const horariosDisponiveis = horariosInstrutor ? CalcHoras(horariosInstrutor, rows, selectedDateFormatted) : [];


    return (
        <div className='container vw-100'>
            <div className='container-fluid max-1200'>
                <div className='container-vertical'>
                    <Menu />
                </div>

                <div className='container-vertical'>
                    <div className="container-horizontal">
                        <div className="container-simple">
                            <h3>Escolha um instrutor: </h3>
                            <select
                                className="select"
                                value={selectedInstrutorId}
                                onChange={(e) => setSelectedInstrutorId(Number(e.target.value))}
                            >
                                {instrutores.map(instrutor => (
                                    <option key={instrutor.id} value={instrutor.id}>
                                        {instrutor.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="container-simple">
                            <h3>Escolha a data: </h3>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy" // Formato de exibição para o usuário
                            />
                        </div>
                    </div>
                    <div className="container-simple">
                        <h3>Horários disponíveis:</h3>
                        {horariosDisponiveis.length > 0 ? (
                            <ul>
                                {horariosDisponiveis.map((hora, index) => (
                                    <li key={index}>{hora}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Nenhum horário disponível.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
