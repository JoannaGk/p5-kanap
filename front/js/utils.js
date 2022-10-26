const fetchData = async(url) => {
    try {
        const rest = await fetch(url);
        console.log("restTest", rest)
        if (!rest.ok) {
            throw new Error("No Data");
        }
        const data = await rest.json();
        console.log("data", data);
        return data
    } catch (error) {
        console.log(error);
    }
}