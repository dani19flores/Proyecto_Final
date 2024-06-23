const axios = require('axios');
const { fetchProducts } = require('../../state/products.slice');

jest.mock('axios');

describe('fetchProducts', () => {
  it('should fetch products from the API', async () => {
    const mockPosts = [
      {
        "id": 460,
        "title": "mebel act",
        "price": 850,
        "description": "yumshoq va qulay",
        "images": [
          "https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-in-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg"
        ],
        "creationAt": "2024-05-24T16:32:44.000Z",
        "updatedAt": "2024-05-24T20:33:36.000Z",
        "category": {
          "id": 3,
          "name": "Titulo de prueba",
          "image": "https://i.imgur.com/Qphac99.jpeg",
          "creationAt": "2024-05-24T05:04:44.000Z",
          "updatedAt": "2024-05-24T20:38:53.000Z"
        }
      },
      {
        "id": 462,
        "title": "mebel",
        "price": 850,
        "description": "yumshoq va qulay",
        "images": [
          "https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-in-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg"
        ],
        "creationAt": "2024-05-24T16:33:03.000Z",
        "updatedAt": "2024-05-24T16:33:03.000Z",
        "category": {
          "id": 3,
          "name": "Titulo de prueba",
          "image": "https://i.imgur.com/Qphac99.jpeg",
          "creationAt": "2024-05-24T05:04:44.000Z",
          "updatedAt": "2024-05-24T20:38:53.000Z"
        }
      }
    ];

    //axios.default.get.mockResolvedValue({ data: mockPosts });

    const result = await fetchProducts();

    console.log({result:result})

    //esto es una prueba expect(result).toEqual(mockPosts);
  });
});
