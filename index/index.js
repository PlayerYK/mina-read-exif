// miniprogram/pages/exif/index.js

// import EXIF from 'exif'
var myexif = require('myexif.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    exif:null,
    iptc:null,
  },

  bindGetExif: function (e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: res => {
        var array = wx.getFileSystemManager().readFileSync(res.tempFilePaths[0]);

        var r = myexif.handleBinaryFile(array);

        console.log(r);
        that.setData({
          exif:r.data,
          iptc:r.iptcdata,
          test:JSON.stringify(r.data.YResolution)
        })
      },
      fail: console.error
    })

  },
})