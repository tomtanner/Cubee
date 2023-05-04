import React from "react";
import { useParams,getUrlParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
const Liveserverroom=()=>{
    function getUrlParams(url) {
        let urlStr = url.split('?')[1];
        const urlSearchParams = new URLSearchParams(urlStr);
        const result = Object.fromEntries(urlSearchParams.entries());
        return result;
    }

    const{roomid}=useParams();
    const myMeeting=async(element)=>{
       // generate Kit Token
  const appID = 1272503640;
  const serverSecret = "18b85117f4617530082c8298f5ee1079";
  const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomid,Date.now().toString(),"1");
  
  // You can assign different roles based on url parameters.
  let role = getUrlParams(window.location.href)['role'] || 'Host';
  role = role === 'Host' ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;
  
  const zp=ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: document.querySelector("#root"),
        scenario: {
            mode: ZegoUIKitPrebuilt.LiveStreaming,
            config: {
                role,
            },
        },
// http://localhost:3000/Liveserverlogin?2&role=Audience#room/2
// http://localhost:3000/Liveserverlogin?2&role=Audience#/room/2
        sharedLinks: [{
            name: 'Join as audience',
            url:
                window.location.origin +
                window.location.pathname +'Liveserverlogin?'+
                +roomid 
                +
                '&role=Audience'+"#/room/"+roomid
        }]
    });
    };
    return (
     <div className="room-page">
        <div ref={myMeeting} />
     </div>
    );
}
export default Liveserverroom;

// propercode
// window.location.origin +
// window.location.pathname +'Liveserverlogin'+
// '?roomid=' +
// roomid +
// '&role=Audience',