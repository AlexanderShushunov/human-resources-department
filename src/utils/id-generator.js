// @flow
import type {Id} from '../model';

export const generateId: () => Id =
    () => String(idGenerator.next().value);

const idGenerator = nats();

function* nats() {
    let id = 0;
    while (true) {
        yield id++;
    }
}
