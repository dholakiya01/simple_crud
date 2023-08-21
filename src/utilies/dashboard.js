import axios from "axios";

const data = async () => {
    const result = await axios.get('http://localhost:4000')
    console.log(result)
    return result
}

export default  data