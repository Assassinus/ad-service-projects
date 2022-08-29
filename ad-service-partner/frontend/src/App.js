import axios from "axios";
import "@progress/kendo-theme-material/dist/all.css";
import './App.css';
import EventsChart from "./components/EventsChart";
import {useEffect, useState} from "react";

function App() {
    const chartUrl = process.env.REACT_APP_CHART_URL
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEventsChart = async () => {
            try {
                const result = await axios(chartUrl)

                setEvents(result.data.events)
            } catch (exception) {
                console.log(exception?.getMessage())
            }
        }

        getEventsChart()
    }, []);

    return (
        <div className="App">
            <EventsChart events={events}/>
        </div>
    );
}

export default App;