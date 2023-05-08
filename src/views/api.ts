// import axios from 'axios';
// import { loadSync } from 'protobufjs';

// function loadProtoTypes() {
//     const root = loadSync('stage.proto');
//     return {
//       GetSceneListResponse: root.lookupType('stage.v1.GetSceneListResponse'),
//       GetSceneResponse: root.lookupType('stage.v1.GetSceneResponse'),
//       GetSceneResponse2: root.lookupType('stage.v1.GetSceneResponse'),
//       GetCurrentSceneResponse: root.lookupType('stage.v1.GetCurrentSceneResponse'),
//       SetSceneRequest: root.lookupType('stage.v1.SetSceneRequest'),
//       SetSceneResponse: root.lookupType('stage.v1.SetSceneResponse'),
//       SetFixtureRequest: root.lookupType('stage.v1.SetFixtureRequest'),
//       SetFixtureResponse: root.lookupType('stage.v1.SetFixtureResponse'),
//       CreateSceneRequest: root.lookupType('stage.v1.CreateSceneRequest'),
//       CreateSceneResponse: root.lookupType('stage.v1.CreateSceneResponse'),
//       DeleteSceneRequest: root.lookupType('stage.v1.DeleteSceneRequest'),
//       DeleteSceneResponse: root.lookupType('stage.v1.DeleteSceneResponse'),
//       CreateFixtureRequest: root.lookupType('stage.v1.CreateFixtureRequest'),
//       CreateFixtureResponse: root.lookupType('stage.v1.CreateFixtureResponse'),
//       DeleteFixtureRequest: root.lookupType('stage.v1.DeleteFixtureRequest'),
//       DeleteFixtureResponse: root.lookupType('stage.v1.DeleteFixtureResponse'),
//       UpdateCurrentSceneRequest: root.lookupType('stage.v1.UpdateCurrentSceneRequest'),
//       UpdateCurrentSceneResponse: root.lookupType('stage.v1.UpdateCurrentSceneResponse'),
//       AddFixturesToSceneRequest: root.lookupType('stage.v1.AddFixturesToSceneRequest'),
//       AddFixturesToSceneResponse: root.lookupType('stage.v1.AddFixturesToSceneResponse'),
//       RemoveAllFixturesFromSceneRequest: root.lookupType('stage.v1.RemoveAllFixturesFromSceneRequest'),
//       RemoveAllFixturesFromSceneResponse: root.lookupType('stage.v1.RemoveAllFixturesFromSceneResponse'),
//     };
// }

// const protoTypes = loadProtoTypes();

// async function testGetSceneList(serverUrl) {
//   try {
//     const response = await axios.get(`${serverUrl}/get-scene-list`, {
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.GetSceneListResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// /**
//  * @param {string} serverUrl
//  * @param {Object} createSceneRequest
//  * @returns {Promise<any>}
//  */
// async function testCreateScene(serverUrl, createSceneRequest) {
//   try {
//     const encodedRequest = protoTypes.CreateSceneRequest.encode(createSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/create-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.CreateSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }
// export { testCreateScene };

// async function testGetScene(serverUrl, sceneId) {
//   try {
//     const response = await axios.get(`${serverUrl}/get-scene/${sceneId}`, {
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.GetSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testUpdateCurrentScene(serverUrl, updateCurrentSceneRequest) {
//   try {
//     const encodedRequest = protoTypes.UpdateCurrentSceneRequest.encode(updateCurrentSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/update-current-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.UpdateCurrentSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testGetCurrentScene(serverUrl) {
//   try {
//     const response = await axios.get(`${serverUrl}/get-current-scene`, {
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.GetCurrentSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testSetScene(serverUrl, setSceneRequest) {
//   try {
//     const encodedRequest = protoTypes.SetSceneRequest.encode(setSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/set-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.SetSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testCreateFixture(serverUrl, createFixtureRequest) {
//   try {
//     const encodedRequest = protoTypes.CreateFixtureRequest.encode(createFixtureRequest).finish();
//     const response = await axios.post(`${serverUrl}/create-fixture`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.CreateFixtureResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }
// async function testSetFixture(serverUrl, setFixtureRequest) {
//   try {
//     const encodedRequest = protoTypes.SetFixtureRequest.encode(setFixtureRequest).finish();
//     const response = await axios.post(`${serverUrl}/set-fixture`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.SetFixtureResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testDeleteScene(serverUrl, deleteSceneRequest) {
//   try {
//     const encodedRequest = protoTypes.DeleteSceneRequest.encode(deleteSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/delete-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.DeleteSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testDeleteFixture(serverUrl, deleteFixtureRequest) {
//   try {
//     const encodedRequest = protoTypes.DeleteFixtureRequest.encode(deleteFixtureRequest).finish();
//     const response = await axios.post(`${serverUrl}/delete-fixture`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.DeleteFixtureResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testAddFixturesToScene(serverUrl, addFixturesToSceneRequest) {
//   try {
//     const encodedRequest = protoTypes.AddFixturesToSceneRequest.encode(addFixturesToSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/add-fixtures-to-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.AddFixturesToSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// async function testRemoveAllFixturesFromScene(serverUrl, removeAllFixturesFromSceneRequest) {
//   try {
//     const encodedRequest = protoTypes.RemoveAllFixturesFromSceneRequest.encode(removeAllFixturesFromSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/remove-all-fixtures-from-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.RemoveAllFixturesFromSceneResponse.decode(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }



import axios, { AxiosResponse } from 'axios';
import { loadSync } from 'protobufjs';

function loadProtoTypes() {
    const root = loadSync('stage.proto');
    return {
      GetSceneListResponse: root.lookupType('stage.v1.GetSceneListResponse'),
      GetSceneResponse: root.lookupType('stage.v1.GetSceneResponse'),
      GetSceneResponse2: root.lookupType('stage.v1.GetSceneResponse'),
      GetCurrentSceneResponse: root.lookupType('stage.v1.GetCurrentSceneResponse'),
      SetSceneRequest: root.lookupType('stage.v1.SetSceneRequest'),
      SetSceneResponse: root.lookupType('stage.v1.SetSceneResponse'),
      SetFixtureRequest: root.lookupType('stage.v1.SetFixtureRequest'),
      SetFixtureResponse: root.lookupType('stage.v1.SetFixtureResponse'),
      CreateSceneRequest: root.lookupType('stage.v1.CreateSceneRequest'),
      CreateSceneResponse: root.lookupType('stage.v1.CreateSceneResponse'),
      DeleteSceneRequest: root.lookupType('stage.v1.DeleteSceneRequest'),
      DeleteSceneResponse: root.lookupType('stage.v1.DeleteSceneResponse'),
      CreateFixtureRequest: root.lookupType('stage.v1.CreateFixtureRequest'),
      CreateFixtureResponse: root.lookupType('stage.v1.CreateFixtureResponse'),
      DeleteFixtureRequest: root.lookupType('stage.v1.DeleteFixtureRequest'),
      DeleteFixtureResponse: root.lookupType('stage.v1.DeleteFixtureResponse'),
      UpdateCurrentSceneRequest: root.lookupType('stage.v1.UpdateCurrentSceneRequest'),
      UpdateCurrentSceneResponse: root.lookupType('stage.v1.UpdateCurrentSceneResponse'),
      AddFixturesToSceneRequest: root.lookupType('stage.v1.AddFixturesToSceneRequest'),
      AddFixturesToSceneResponse: root.lookupType('stage.v1.AddFixturesToSceneResponse'),
      RemoveAllFixturesFromSceneRequest: root.lookupType('stage.v1.RemoveAllFixturesFromSceneRequest'),
      RemoveAllFixturesFromSceneResponse: root.lookupType('stage.v1.RemoveAllFixturesFromSceneResponse'),
    };
}

const protoTypes = loadProtoTypes();


async function testGetSceneList(serverUrl: string) {
  try {
    const response = await axios.get(`${serverUrl}/get-scene-list`, {
      responseType: 'arraybuffer',
    });
    return protoTypes.GetSceneListResponse.decode(response.data);
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}



interface CreateSceneRequest {

    scene: {
      name: string,
      external: false,
      stage: {
        fixtures: null,
      },
    },

  
  // Add other properties as needed
}

interface ApiResponse {
  // Define the structure of your API response
}

async function testCreateScene(serverUrl: string, createSceneRequest: CreateSceneRequest): Promise<ApiResponse | null> {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.post(`http://${serverUrl}/create-scene`, createSceneRequest);
    return null;
  } catch (error) {
    console.error('Error creating scene:', error);
    return null;
  }
}

export default testCreateScene;


async function testDeleteScene(serverUrl: string, deleteSceneRequest: CreateSceneRequest) {
  try {
    const encodedRequest = protoTypes.DeleteSceneRequest.encode(deleteSceneRequest).finish();
    const response = await axios.post(`${serverUrl}/delete-scene`, encodedRequest, {
      headers: { 'Content-Type': 'application/octet-stream' },
      responseType: 'arraybuffer',
    });
    return protoTypes.DeleteSceneResponse.decode(response.data);
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}



async function testGetScene(serverUrl: string, sceneId: string) {
  try {
    const response = await axios.get(`${serverUrl}/get-scene/${sceneId}`, {
      responseType: 'arraybuffer',
    });
    return protoTypes.GetSceneResponse.decode(response.data);
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}

async function testUpdateCurrentScene(serverUrl: string, sceneName: string) {
  try {
    const encodedRequest = protoTypes.UpdateCurrentSceneRequest.encode({newSceneId:sceneName}).finish();
    const response = await axios.post(`${serverUrl}/update-current-scene`, encodedRequest, {
      headers: { 'Content-Type': 'application/octet-stream' },
      responseType: 'arraybuffer',
    });
    return protoTypes.UpdateCurrentSceneResponse.decode(response.data);
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}

async function testGetCurrentScene(serverUrl: string) {
  try {
    const response = await axios.get(`${serverUrl}/get-current-scene`, {
      responseType: 'arraybuffer',
    });
    return protoTypes.GetCurrentSceneResponse.decode(response.data);
  } catch (error:any) {
    console.error('Error:', error.message);
  }
}

// async function testSetScene(serverUrl: string, setSceneRequest: string) {
//   try {
//     const encodedRequest = protoTypes.SetSceneRequest.encode(setSceneRequest).finish();
//     const response = await axios.post(`${serverUrl}/set-scene`, encodedRequest, {
//       headers: { 'Content-Type': 'application/octet-stream' },
//       responseType: 'arraybuffer',
//     });
//     return protoTypes.SetSceneResponse.decode(response.data);
//   } catch (error:any) {
//     console.error('Error:', error.message);
//   }
// }