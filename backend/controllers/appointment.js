const Appointment = require('../models/Appointment')
const Mechanic = require('../models/Mechanic')
const {
    getAllMechanic,
    getMechanicById,
    createMechanic,
    deleteMechanicById,
    updateMechanicById,
    getMechanicAvailability,
    isInBuisnessDay,
    createAvailableSpots,
    
    
} = require('../controllers/mechanic')

async function getAllAppointment(req, res) {
    try {
        const appointments = await Appointment.find()
        res.json(appointments)        
    } catch(error){
        console.log('error fetching appointment:', error)
        res.json({'message': 'error fetching appointment'})
    }
}
async function getAllAvailaleAppointment(req, res){
    try {        
        const availableAppointment = await Appointment.findBy(mechanic)        
        console.log(availableAppointment)
    } catch(error){
        console.log('error fetching appointment:', error)
        res.json({'message': 'error fetching appointment'})
    }
}

async function getAppointmentById(req, res) {
    try {
        const { id } = req.params
        const appointment = await Appointment.findById(id)
        if (!appointment) throw new Error('error retrieving appointment')
        res.json(appointment)
    } catch(error){
        console.log('error fetching appointment:', error)
        res.json({'message': 'error fetching appointment'})
    }
}



async function createAppointment(req, res) {   

    const { customer, mechanic, appointmentDate, appointmentTime } = req.body
    
    const inBuisnessDay = await isInBuisnessDay(new Date(appointmentDate)) // working on it
    console.log('appointment date',inBuisnessDay)
   
    const currentDate = new Date().getTime()    
    const appointmentDateRequested = new Date(appointmentDate)    
    const futureDate = new Date(currentDate + 36500000000) 
    const pastDate = new Date(currentDate - 1000000)    

     const time = appointmentTime
     const beforeBuisnessOpen = time < 8
     const afterBuisnessClose = time > 16
 
    

    const existingMechanicAppointment =await Appointment.find({ mechanic, appointmentDate, appointmentTime })
    console.log('mechanic appointment', existingMechanicAppointment)
    
    if(appointmentDateRequested <= pastDate || appointmentDateRequested > futureDate || inBuisnessDay == false || beforeBuisnessOpen || afterBuisnessClose){
        res.json({ 'message': 'error wrong time' })
        return
    }else{

        if (existingMechanicAppointment.length ){
            res.json({ 'message': 'error creating appointment; an appointment already exists' })
            return
        }    
    }
    
     
    try {          
        const appointment = new Appointment({ customer, mechanic, appointmentDate, appointmentTime })
        await appointment
        res.status(201).json({ 'message': 'appointment created', id: appointment.id})
         
        }catch (error) {      
        res.json({ 'message': 'error creating appointment' })
    }    
}

async function updateAppointmentById(req, res) {
    console.log(req.body)
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Appointment.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'appointment updated' })
    } catch (error) {
        console.log('error updating appointment:', error)
        res.json({ 'message': 'error updating appointment' })
    }
}

async function deleteAppointmentById(req, res) {
    try {
        const { id } = req.params
        await Appointment.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'appointment deleted' })
    } catch (error) {
        console.log('error deleting appointment:', error)
        res.json({ 'message': 'error deleting appointment' })
    }
}

module.exports = {
    getAllAppointment,
    getAppointmentById,
    createAppointment,
    deleteAppointmentById,
    updateAppointmentById,
    getAllAvailaleAppointment,
}