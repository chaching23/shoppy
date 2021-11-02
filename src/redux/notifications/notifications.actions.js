import notificationsTypes from "./notifications.types";
const PUSH_ENDPOINT = "https://exp.host/--/api/v2/push/send";


export const sendNotificationToAll = () => {
  /// call action
  return async dispatch => {
      // dispatch global sender
  };
  
export const sendNotifcation = () => {
    /// call action
    return async dispatch => {
        // dispatch sender
    };
}

// export const sendNotification = (token, text) => {
//     console.log("sendNotification ", text);
//     return async (dispatch, getState) => {
//     //   const { username } = getState().user;
  
//       try {
//         // const user = await db.collection("users").doc(uid).get();
//         // if (user.data().token) {
          
//         // }

//         const data = await fetch(PUSH_ENDPOINT, {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               to: token,
//               title: "Test Title",
//               body: text,
//             }),
//           });
//           console.log("done fetching");
//           const json = await data.json();
//           console.log("json", json);
//       } catch (e) {
//         console.error(e);
//       }
//     };
//   };


}