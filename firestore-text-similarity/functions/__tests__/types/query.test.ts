
//@ts-ignore
import { Query } from "query";

describe('Query class tests', () => {
    test('should initialize the Query object with given id and featureVector', () => {
        const id = 'testId';
        const featureVector = [0.5, 0.6, 0.7];
        const query = new Query(id, featureVector);

        expect(query.id).toEqual(id);
        expect(query.featureVector).toEqual(featureVector);
    });

    test('toVertexQuery() should return the proper vertex query format', () => {
        const id = 'testId';
        const featureVector = [0.5, 0.6, 0.7];
        const expectedVertexQuery = {
            datapoint: {
                datapoint_id: id,
                feature_vector: featureVector,
            },
        };
        const query = new Query(id, featureVector);

        const result = query.toVertexQuery();
        expect(result).toEqual(expectedVertexQuery);
    });
});