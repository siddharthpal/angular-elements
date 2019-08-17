module.exports = {
  name: 'car',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/car',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
