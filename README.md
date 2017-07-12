# T-RemotEye Device Starter Kit

## T-RemotEye Device Connection Guide


### Device Connection Flow
![Connectionflow](https://github.com/tremoteye/device-starter-kit/blob/master/images/Screenshot2.png)

### Device Configuration (For stater-kit only)
| 구분   |      설명      |  비고  |
|:----------:|:-------------:|:------:|
| Device ID | 06b33db0-65dc-11e7-b348-83e2a45c1de5 | |
| Device Access Token |   tremoteyedevicekit01  |  - |


### Protocol
T-RemotEye과 Device 간 Connection을 위해서는 MQTT(S) 프로토콜을 사용합니다.

| 구분   |      설명      |  비고  |
|:----------:|:-------------:|:------:|
| Host |   | 개발 서버 방화벽 오픈 문의 (hb.ahn@sk.com) |
| Port |   1883 or 8883   |  - |
| UserName | tremoteyedevicekit01 |  |
| PassWord | No password is needed |      -   |

## Code Instruction
본 코드를 실행하기 위해서는 사전에 npm 및 node.js가 설치되어 있어야 하며, T-RemotEye의 테스트 서버에 접속하기 위해 방화벽 오픈이 되어야 함.<br>
>**방화벽 오픈 문의 : hb.ahn@sk.com**

1.  config.js 수정
2.  $ npm install 실행
3.  $ node device.js 실행

### Operation Example
![alt text](https://github.com/tremoteye/device-starter-kit/blob/master/images/Screenshot1.png)
