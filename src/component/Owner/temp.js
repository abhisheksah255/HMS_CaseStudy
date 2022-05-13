// own-add man,ad recp ,all secvice access


// manager-- staff,Inv,add room, delete


// recp--room booking,serch room,book room,add guest



// rec- seach room,,add guest,,reservation,payment,report

// manager--addstaff,inv,


// ============================================================

user= {
	id: 'nnknksiva98t6',
	name: 'Something',
	username: 'Name Kumar',
	password: '********',
	role: 'owner' || 'manager' || 'receptionist'
}

// =================== AFTER LOGIN ============================
// incoming data=> 
logindata ={username: "name", password: "pass"}
// return => 
data ={
	token: 'eyhkjbxhsa89684sbkb.hjbhuavs765', 
	user:{
        id: '7tggvyr67r',
        name: 'some_name',
        role: 'owner'
	}
}

// =============== BACKEND RESTRICTION FOR SPECIFIC SERVICES =============

// =====================================
// receptionist login 
// backend will send all room data (frontend has to recognize what's available and what's not)
// can see rooms, Availability status,
// 


