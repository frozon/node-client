import RepresentationList from './representationList';
import { NimveloClient, RepresentationBase } from '../interfaces';
declare class SoundList extends RepresentationList {
    constructor(client: NimveloClient, parent: RepresentationBase);
}
export default SoundList;