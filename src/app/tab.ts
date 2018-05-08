import { Component } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.html',
})
export class TabComponent {
  public profile: any[] = [
    { img: 'attached-file.png', probar: '100%', probarOK: 'progressOk' },
    { img: 'attached-file.png', probar: '30%', probarOK: 'progressinComp' },
    { img: 'attached-file.png', probar: '30%', probarOK: 'progressinComp' },
    { img: 'attached-file.png', probar: '30%', probarOK: 'progressinComp' }
  ]
  public media: any[] = [
    { img: 'medical-info.png', probar: '100%', probarOK: 'progressOk' },
    { img: 'medical-info.png', probar: '30%', probarOK: 'progressinComp' },
    { img: 'medical-info.png', probar: '30%', probarOK: 'progressinComp' },
    { img: 'medical-info.png', probar: '30%', probarOK: 'progressinComp' }
  ]
  public tags: any[] = [
    { fName: 'backup_3.zip', tag: ['identifying', 'Authenticating', 'unAuthenticating'] },
    { fName: 'backup_3.zip', tag: ['identifying', 'unAuthenticating'] },
    { fName: 'backup_3.zip', tag: ['identifying', 'Authenticating', 'unAuthenticating'] }
  ]
}