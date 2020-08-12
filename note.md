# note

## CIで実行する場合

環境変数CIがあれば、 `react-scripts test --watchAll=false` と同じ結果になり、テストが自動で動作する。

https://create-react-app.dev/docs/running-tests/#on-ci-servers

環境によって勝手に変わる（環境によって期待される通りに変わらない）のが微妙にきもいので、 `--watchAll=false` を明示的に仕込んだスクリプトを作るか？
