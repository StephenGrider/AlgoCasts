function militaryTime(n) {

    let [time, ampm] = n.split(" ")
    let [hours, minutes] = time.split(":")

    if (hours === '12'){
        hours = '00'
    }

    if (ampm === 'PM' || ampm === 'pm'){
        hours = parseInt(hours) + 12
    }

    console.log( `${hours}:${minutes}`)

}

militaryTime("4:04 PM")