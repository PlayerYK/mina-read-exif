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
    printString:"",
  },

  bindGetExif: function (e) {
    let that = this;
    wx.chooseMedia({
      count: 1,
      mediaType:['image'],
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: res => {
        var array = wx.getFileSystemManager().readFileSync(res.tempFiles[0].tempFilePath);

        var r = myexif.handleBinaryFile(array);

        console.log(r);
        that.setData({
          exif:r.data,
          iptc:r.iptcdata,
          printString:JSON.stringify(r.data,null,2)
        })
      },
      fail: console.error
    })

  },
})