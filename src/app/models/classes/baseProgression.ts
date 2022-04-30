import { BehaviorSubject, Observable } from 'rxjs';
import { ProgressionAbstract, BaseItemProgressionDataGeneric } from './progression.abstract';

export interface BaseItemProgressionData extends BaseItemProgressionDataGeneric<any> {
  id: number;
  level: number;
  xpEarned: number;
  xpToNextLevel: number;
}
export class ProgressionBase {
// TODO: fix this - not sure why it's not working
// export class ProgressionBase implements ProgressionAbstract {
  // private _progressionData: BehaviorSubject<
  //   Map<number, BaseItemProgressionData>
  // > = new BehaviorSubject(this._setInitValue());

  private _setInitValue(): Map<number, BaseItemProgressionData> {
    return new Map();
  }

  // get progressionData$(): Observable<Map<number, BaseItemProgressionData>> {
  //   return this._progressionData.asObservable();
  // }

  set progressionData(progressionData: Map<number, BaseItemProgressionDataGeneric<any>>) {
  }

  // set progressionData(data: BaseItemProgressionData) {
  //   const progressionData = this._progressionData.getValue();
  //   progressionData.set(data.id, data);
  //   this._progressionData.next(progressionData);
  // }
}
