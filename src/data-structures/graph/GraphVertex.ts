import { uuid, isFunction } from 'utilities';
import { GraphEdge } from './GraphEdge';
import { Serializable } from '../interfaces';

export type SerializedGraphVertex<T> = {
    key: string;
    value: T;
    edges: string[];
};

export class GraphVertex<T> implements Serializable<SerializedGraphVertex<T>> {
    readonly key: string;
    value: T;

    private edges: { [key: string]: GraphEdge<T> };

    constructor(value: T, key?: string) {
        this.key = key || uuid();
        this.value = value;
        this.edges = {};
    }

    updateValue(update: T | ((value: T) => T)) {
        if (isFunction(update)) {
            this.value = update(this.value);
        } else {
            this.value = update;
        }
    }

    addEdge(edge: GraphEdge<T>): this {
        this.edges[edge.key] = edge;
        return this;
    }

    removeEdge(edge: GraphEdge<T>): this {
        delete this.edges[edge.key];
        return this;
    }

    hasEdge(edge: GraphEdge<T>): boolean {
        return !!this.edges[edge.key];
    }

    findConnectingEdge(vertex: GraphVertex<T>): GraphEdge<T> | void {
        return Object.values(this.edges).find(
            (edge) => edge.from === vertex || edge.to === vertex
        );
    }

    neighbours(): GraphVertex<T>[] {
        return Object.values(this.edges).map((edge) => {
            if (edge.from === this) {
                return edge.to;
            } else {
                return edge.from;
            }
        });
    }

    serialize() {
        return {
            key: this.key,
            value: this.value,
            edges: Object.keys(this.edges),
        };
    }
}
