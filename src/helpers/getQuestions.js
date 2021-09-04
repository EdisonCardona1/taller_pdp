const getQuestions = async (urlAPI) => {
    const url= urlAPI;
    const res = await fetch(url);
    const question = await res.json();
    return question;
}

export default getQuestions
