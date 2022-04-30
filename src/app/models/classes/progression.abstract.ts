import { BehaviorSubject, Observable } from 'rxjs';

export interface BaseItemProgressionDataGeneric<T> {
  id: number;
}

export abstract class ProgressionAbstract {
  // Observable data source with generic type
  private _progressionData: BehaviorSubject<
    Map<number, BaseItemProgressionDataGeneric<any>>
  > = new BehaviorSubject(this._setInitValue());

  private _setInitValue(): Map<number, BaseItemProgressionDataGeneric<any>> {
    return new Map();
  }

  get progressionData$(): Observable<
    Map<number, BaseItemProgressionDataGeneric<any>>
  > {
    return this._progressionData.asObservable();
  }

  set progressionData(
    progressionData: Map<number, BaseItemProgressionDataGeneric<any>>
  ) {
    this._progressionData.next(progressionData);
  }
}
