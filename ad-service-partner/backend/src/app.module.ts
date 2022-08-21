require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from "./models/event";
import { EventController } from "./controllers/event.controller";
import { EventService } from "./services/event.service";

console.log('TETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT')
console.log(process.env.MONGO_URI)
@Module({
            imports: [
                MongooseModule.forRoot(process.env.MONGO_URI),
                MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])
            ],
            controllers: [EventController],
            providers: [EventService],
        })

export class AppModule {}