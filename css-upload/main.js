imageInput.onchange = function(e){
    let formData = new FormData()
    formData.append('xxx', e.target.files[0])
    console.log( e.target.files[0])
    $.ajax({
      url:'xxx',
      data:formData,
      type:'post',
      processData:false,
      contentType:false,
    })
    e.target.value = ''
  }
  