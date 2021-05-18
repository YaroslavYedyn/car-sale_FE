import {Component, OnInit} from '@angular/core';

// @ts-ignore
import carIcon from '../../image/icon/noun_Electric Car_2294428.svg';
// @ts-ignore
import messageIcon from '../../image/icon/noun_chat_52716.svg';
// @ts-ignore
import logOutIcon from '../../image/icon/003-log-out.svg';
// @ts-ignore
import notificationIcon from '../../image/icon/noun_notification_1131446.svg';
// @ts-ignore
import settingsIcon from '../../image/icon/noun_Settings_2874890.svg';
// @ts-ignore
import UpIcon from '../../image/icon/Up.svg';
// @ts-ignore
import noteIcon from '../../image/icon/noun_note_3107489.svg';
// @ts-ignore
import DownIcon from '../../image/icon/Down.svg';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  carIcon = carIcon;
  messageIcon = messageIcon;
  logOutIcon = logOutIcon;
  notificationIcon = notificationIcon;
  settingsIcon = settingsIcon;
  UpIcon = UpIcon;
  DownIcon = DownIcon;
  noteIcon = noteIcon;
  homeDropdownStatus: boolean;
  settingDropdownStatus: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  addDropdownHome(): void {
    this.homeDropdownStatus = !this.homeDropdownStatus;
  }

  addDropdownSetting(): void {
    this.settingDropdownStatus = !this.settingDropdownStatus;
  }
}
