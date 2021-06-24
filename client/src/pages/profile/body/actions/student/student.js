import AddGroup from "./group-add";
import TestResult from "./test-result";
import Group from "./group";

export default function Student(props) {
    const testMap = new Map();
    testMap.set("a", 80);
    testMap.set("b", 90);

    return (
        <div>
            <div>
                <Group userGroup={props.userGroup}/>
                <AddGroup />
            </div>
            <div>
                <TestResult testResult={testMap}/>
            </div>
        </div>
    );
}