import { LogicRoomReg } from './LogicRoomReg';

document.querySelectorAll('.js-registration-container').forEach((room) => {
  new LogicRoomReg(room);
});
