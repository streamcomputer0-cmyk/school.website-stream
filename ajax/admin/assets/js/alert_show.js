function sweet_alert_data(text="", title="",icon=""){
    swal({
        title : title,
        text : text,
        icon : icon,
  buttons: {
    roll: {
        text: "OK",
      className : "btn btn-success align-center pl-5 pr-5"
    },
},
closeOnClickOutside: false,
closeOnEsc: false,
});
}
