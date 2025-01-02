1. Github 원격 저장소에서 로컬 저장소로 Pull 할 때

    1. Delete "package-lock.json"
    2. npm install
    3. OPEN "node_modules/react-native/index.js"
    4. starting around line 436 and 
    
    change this:
    =======================================================================================
    // Deprecated Prop Types
    get ColorPropType(): $FlowFixMe {
        invariant(
            false,
            "ColorPropType has been removed from React Native. Migrate to " +
            "ColorPropType exported from 'deprecated-react-native-prop-types'.",
        );
    },
    get EdgeInsetsPropType(): $FlowFixMe {
        invariant(
            false,
            "EdgeInsetsPropType has been removed from React Native. Migrate to " +
            "EdgeInsetsPropType exported from 'deprecated-react-native-prop-types'.",
        );
    },
    get PointPropType(): $FlowFixMe {
        invariant(
            false,
            "PointPropType has been removed from React Native. Migrate to " +
            "PointPropType exported from 'deprecated-react-native-prop-types'.",
        );
    },
    get ViewPropTypes(): $FlowFixMe {
        invariant(
        false,
        "ViewPropTypes has been removed from React Native. Migrate to " +
            "ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
        );
    },
    =======================================================================================
    to this:
    =======================================================================================
    // Deprecated Prop Types
    get ColorPropType(): $FlowFixMe {
        return require("deprecated-react-native-prop-types").ColorPropType
    },
    get EdgeInsetsPropType(): $FlowFixMe {
        return require("deprecated-react-native-prop-types").EdgeInsetsPropType
    },
    get PointPropType(): $FlowFixMe {
        return require("deprecated-react-native-prop-types").PointPropType
    },
    get ViewPropTypes(): $FlowFixMe {
        return require("deprecated-react-native-prop-types").ViewPropTypes
    },
    =======================================================================================

    5. npx patch-package react-native
    6. build: npm start & npm run android
    7. Success 😁





2. Eslint and Prettier 설정 관련
    1. VSCode extension : Eslint & Prettier를 삭제 후 재설치
    2. command: Ctrl+Shift+P => search: Preferences: Open User Settings
    3. search: configutarion => "settings.json" 에서 편집 클릭
    4. 아래의 코드로 수정 후 저장

    =======================================================================================
    {
    "liveServer.settings.useLocalIp": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "eslint.execArgv": null,
    "prettier.eslintIntegration": true,
    "editor.tabSize": 2,
    // if u want to auto-save, Remove the comments from the four lines below
    // "editor.formatOnSave": true,
    // "editor.codeActionsOnSave": {
    //     "source.fixAll.eslint": true
    // },
    "launch": {
        "configurations": [],
        "compounds": []
    }
    =======================================================================================

    5. // if u want to auto-save, ... OnSave관련 주석을 해제하면 파일을 저장(Ctrl + S) 시
        자동으로 Eslint와 Prettier가 적용됨 (매우 편함!!) 
        * 주의: 포맷터 없이 코딩을 해왔기 때문에 Github에서 conflict의 원인이 될 수 있으니 주의. 의도적으로 주석을 다시 달아줘야 할 수도 있음
}