import {action, makeObservable, observable} from "mobx";

export class Model<TYPE extends object> {
    @observable
    protected _state: TYPE;

    public constructor(initialValues: TYPE) {
        this._state = {...initialValues};


        makeObservable(this);
    }

    public get state(): TYPE {
        return this._state
    }

    @action.bound
    public set<KEY extends keyof TYPE>(fieldName: KEY, value: TYPE[KEY]): this {

        if (value === this._state[fieldName]) return this;

        this._state[fieldName] = value;
        return this;
    }

    //...Другие методы

}
