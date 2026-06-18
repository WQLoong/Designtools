// --- 骨骼动效模板配置（增删改都在此文件进行） ---
const SKELETAL_TEMPLATES = {
    idle: {
        label: "idle (微呼吸)",
        spine: {
            scale: [{time:0,x:1,y:1},{time:0.4,x:1.04,y:0.96},{time:0.8,x:1,y:1}],
            translate: [{time:0,x:0,y:0},{time:0.4,x:0,y:5},{time:0.8,x:0,y:0}]
        }
    },
    in: {
        label: "in (淡入落地弹跳)",
        spine: {
            scale: [{time:0,x:0,y:0},{time:0.2,x:1.15,y:1.15},{time:0.35,x:0.95,y:0.95},{time:0.5,x:1,y:1}],
            color: [{time:0,color:"ffffff00"},{time:0.15,color:"ffffffff"}]
        }
    },
    loop: {
        label: "loop (旋转)",
        spine: {
            rotate: [{time:0,angle:0},{time:0.4,angle:120},{time:0.8,angle:240},{time:1.2,angle:360}],
            scale: [{time:0,x:1,y:1},{time:0.6,x:1.06,y:1.06},{time:1.2,x:1,y:1}]
        }
    },
    win: {
        label: "win (强力缩放变形)",
        spine: {
            scale: [{time:0,x:1,y:1},{time:0.1,x:1.3,y:0.7},{time:0.25,x:0.75,y:1.35},{time:0.4,x:1.15,y:0.9},{time:0.6,x:1,y:1}],
            rotate: [{time:0,angle:0},{time:0.15,angle:-15},{time:0.3,angle:15},{time:0.45,angle:-5},{time:0.6,angle:0}],
            color: [{time:0,color:"ffffffff"},{time:0.15,color:"ffd700ff"},{time:0.3,color:"ffffffff"},{time:0.45,color:"ffd700ff"},{time:0.6,color:"ffffffff"}]
        }
    },
    gray: {
        label: "gray (置灰静态)",
        spine: {
            scale: [{time:0,x:1,y:1},{time:0.8,x:1.01,y:0.99},{time:1.6,x:1,y:1}],
            color: [{time:0,color:"666666ff"}]
        }
    },
    out: {
        label: "out (旋转缩回)",
        spine: {
            scale: [{time:0,x:1,y:1},{time:0.4,x:0,y:0}],
            rotate: [{time:0,angle:0},{time:0.4,angle:-180}],
            color: [{time:0,color:"ffffffff"},{time:0.4,color:"ffffff00"}]
        }
    }
};

const TEMPLATE_IDS = Object.keys(SKELETAL_TEMPLATES);
const DEFAULT_TEMPLATE = TEMPLATE_IDS[0];

function templateOptionsHTML(selected) {
    return Object.entries(SKELETAL_TEMPLATES).map(([id, tpl]) =>
        `<option value="${id}"${selected===id?' selected':''}>${tpl.label}</option>`
    ).join('');
}
