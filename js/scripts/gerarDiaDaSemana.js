function generateWeekDay() {
    const weekDay = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });
    const numberDay = new Date().toLocaleDateString('pt-BR');
    const dayTime = new Date().toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false    
    })
    const dateInfo = `${weekDay} (${numberDay}) às ${dayTime}`;

    return dateInfo;
}

export default generateWeekDay;