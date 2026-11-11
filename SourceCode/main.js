const {app,BrowserWindow,Menu}=require('electron');
const path=require('path');
function create(){
  Menu.setApplicationMenu(null);
  const w=new BrowserWindow({width:1280,height:720,minWidth:800,minHeight:500,title:'Penalty Arena',icon:path.join(__dirname,'build','icon.ico'),backgroundColor:'#050b0a',autoHideMenuBar:true,webPreferences:{contextIsolation:true,sandbox:true}});
  w.loadFile(path.join(__dirname,'src','index.html'));
  w.webContents.on('before-input-event',(e,i)=>{if(i.type==='keyDown'&&i.key==='F11')w.setFullScreen(!w.isFullScreen());if(i.type==='keyDown'&&i.key==='Escape'&&w.isFullScreen())w.setFullScreen(false)});
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
