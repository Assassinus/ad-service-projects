require('dotenv').config();
import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { Event, EventSchema } from "./models/event";
import { EventsSeeder } from "./event.seeder";

seeder({
           imports: [
               MongooseModule.forRoot(process.env.MONGO_URI),
               MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])
           ]
}).run([EventsSeeder]);