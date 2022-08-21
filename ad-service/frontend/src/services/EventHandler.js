import axios from 'axios';

const sendUrl = process.env.REACT_APP_EVENT_SEND_URL

const handle = async (event) => {
    try {
        await axios.post(sendUrl, event)
    } catch (exception) {
        //TODO logger
        console.log(exception.getMessage());
    }
}

const eventHandler = {handle}

export default eventHandler;