// export default class SocketManager {
//   constructor(entityManager) {
//     this.socket = io();
//     // this.socket.on("init", this.onInit.bind(this));
//     // this.socket.on("players", this.onPlayers.bind(this));
//     // this.socket.on("enemies", this.onEnemies.bind(this));
//     this.entityManager = entityManager;
//   }

//   getPlayerData(socket) {
//     return new Promise((resolve, reject) => {
//       socket.on("init", (player) => {
//         resolve(player); // 이벤트가 발생하면 데이터를 resolve하여 반환
//       });

//       socket.on("error", (error) => {
//         reject(error); // 에러 발생 시 reject
//       });
//     });
//   }

//   async handlePlayerData() {
//     try {
//       return await this.getPlayerData(this.socket);
//     } catch (error) {
//       console.error("에러 발생:", error);
//     }
//   }

//   async main() {
//     return await handleSocket(socketManager);
//   }
// }

function createSocketManager(socket) {
  return {
    handlePlayerData: () => {
      return new Promise((resolve, reject) => {
        socket.on("init", (player) => {
          resolve(player);
        });

        socket.on("error", (error) => {
          reject(error);
        });
      });
    },
  };
}

async function handleSocket(socketManager) {
  try {
    const player = await socketManager.handlePlayerData();
    
    if (player) {
      return dddd(player);
    }
  } catch (error) {
    console.error("플레이어 데이터 처리 중 오류 발생:", error);
    return {}; // 에러 발생 시 빈 객체 반환
  }
}

function dddd(ddd) {
  console.log(ddd);
}

export { handleSocket, createSocketManager };
