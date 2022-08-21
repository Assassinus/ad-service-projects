import './App.css';
import {Button, Form} from 'react-bootstrap';
import eventHandler from "./services/EventHandler";
import {useState} from "react";

function App() {
    const [price, setPrice] = useState()

    const handleEvent = (type, ...[data]) => {
        //TODO token
        const response = eventHandler.handle({type, ...data})

        //TODO logger | notification
        response.then(
            result => console.log(`Event ${type} sent`),
            error => console.log('Something went wrong... ' + error.toString())
        )
            .catch((exception) => console.log(exception))
    }

    return (
        <div className="App">
            <div className="container">
                <div className="section">
                    <Form onSubmit={(event) => {
                        event.preventDefault();
                        handleEvent('install');
                    }}
                    >
                        <Button type={"submit"} variant="dark">Событие установки</Button>
                    </Form>
                </div>
                <div className="section">
                    <Form onSubmit={(event) => {
                        event.preventDefault();
                        handleEvent('pay', {value: price});
                    }}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Сумма платежа"
                                          name="value"
                                          value={price}
                                          onChange={(event) => setPrice(event.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Оплатить
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default App;