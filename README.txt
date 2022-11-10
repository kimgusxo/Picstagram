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