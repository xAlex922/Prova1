// Mock database - In produzione sostituire con Supabase
export interface User {
  id: string;
  email: string;
  password: string; // In produzione: hash
  nome: string;
  cognome: string;
  telefono: string;
  indirizzo?: string;
  citta?: string;
  cap?: string;
  dataNascita?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'montature_vista' | 'montature_sole' | 'lenti_contatto' | 'liquidi';
  price: number;
  description: string;
  image: string;
  stock: number;
}

export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: OrderItem[];
  invoice?: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Appointment {
  id: string;
  userId: string;
  visitType: string;
  date: string;
  time: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  price: number;
}

export interface Visit {
  id: string;
  userId: string;
  date: string;
  type: string;
  category: 'occhiali' | 'lenti';
  notes: string;
}

export interface Prescription {
  id: string;
  userId: string;
  rightEye: {
    sphere: string;
    cylinder: string;
    axis: string;
    bc: string;
  };
  leftEye: {
    sphere: string;
    cylinder: string;
    axis: string;
    bc: string;
  };
  brand: string;
  issueDate: string;
  isActive: boolean;
}

export interface Message {
  id: string;
  userId: string;
  sender: 'user' | 'optician';
  text: string;
  timestamp: string;
  isRead: boolean;
}

// Mock data store
class MockDatabase {
  private users: User[] = [
    {
      id: '1',
      email: 'demo@ottica.com',
      password: 'demo123', // In produzione: bcrypt hash
      nome: 'Mario',
      cognome: 'Rossi',
      telefono: '+39 333 1234567',
      indirizzo: 'Via Roma 123',
      citta: 'Milano',
      cap: '20100',
      dataNascita: '1990-05-15',
    },
  ];

  private products: Product[] = [
    // Montature Vista
    {
      id: '1',
      name: 'Ray-Ban RB5154',
      brand: 'Ray-Ban',
      category: 'montature_vista',
      price: 150,
      description: 'Montatura classica in acetato con design senza tempo. Perfetta per uso quotidiano.',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400',
      stock: 10,
    },
    {
      id: '2',
      name: 'Oakley OX8156',
      brand: 'Oakley',
      category: 'montature_vista',
      price: 180,
      description: 'Design sportivo e moderno con materiali ultra-leggeri.',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400',
      stock: 8,
    },
    {
      id: '3',
      name: 'Gucci GG0011O',
      brand: 'Gucci',
      category: 'montature_vista',
      price: 320,
      description: 'Eleganza italiana con dettagli esclusivi del marchio.',
      image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400',
      stock: 5,
    },
    // Occhiali da Sole
    {
      id: '4',
      name: 'Ray-Ban Aviator',
      brand: 'Ray-Ban',
      category: 'montature_sole',
      price: 170,
      description: 'Il classico intramontabile con protezione UV400.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      stock: 15,
    },
    {
      id: '5',
      name: 'Oakley Holbrook',
      brand: 'Oakley',
      category: 'montature_sole',
      price: 190,
      description: 'Design ispirato agli anni 50 con tecnologia moderna.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      stock: 12,
    },
    {
      id: '6',
      name: 'Persol PO3019S',
      brand: 'Persol',
      category: 'montature_sole',
      price: 280,
      description: 'Artigianalità italiana con lenti polarizzate.',
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400',
      stock: 7,
    },
    // Lenti a Contatto
    {
      id: '7',
      name: 'Acuvue Oasys (30 lenti)',
      brand: 'Acuvue',
      category: 'lenti_contatto',
      price: 35,
      description: 'Lenti giornaliere con tecnologia Hydraclear Plus.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
      stock: 50,
    },
    {
      id: '8',
      name: 'Dailies Total 1 (30 lenti)',
      brand: 'Alcon',
      category: 'lenti_contatto',
      price: 40,
      description: 'Comfort eccezionale per tutto il giorno.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
      stock: 45,
    },
    {
      id: '9',
      name: 'Biofinity (6 lenti)',
      brand: 'CooperVision',
      category: 'lenti_contatto',
      price: 30,
      description: 'Lenti mensili ad alta traspirabilità.',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400',
      stock: 30,
    },
    // Liquidi
    {
      id: '10',
      name: 'Soluzione Unica ReNu 360ml',
      brand: 'ReNu',
      category: 'liquidi',
      price: 8,
      description: 'Pulizia e disinfezione completa delle lenti.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
      stock: 100,
    },
    {
      id: '11',
      name: 'Biotrue 300ml',
      brand: 'Bausch+Lomb',
      category: 'liquidi',
      price: 10,
      description: 'Formula bioispirata per comfort naturale.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
      stock: 80,
    },
    {
      id: '12',
      name: 'Opti-Free 300ml',
      brand: 'Alcon',
      category: 'liquidi',
      price: 12,
      description: 'Rimozione proteine e depositi efficace.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
      stock: 90,
    },
  ];

  private orders: Order[] = [
    {
      id: '1',
      userId: '1',
      orderNumber: 'ORD-2024-001',
      date: '2024-12-20',
      total: 185.5,
      status: 'delivered',
      invoice: 'INV-2024-001.pdf',
      items: [
        { productId: '1', name: 'Ray-Ban RB5154', quantity: 1, price: 150 },
        { productId: '10', name: 'Soluzione Unica ReNu 360ml', quantity: 2, price: 8 },
      ],
    },
    {
      id: '2',
      userId: '1',
      orderNumber: 'ORD-2024-002',
      date: '2024-11-30',
      total: 70,
      status: 'delivered',
      invoice: 'INV-2024-002.pdf',
      items: [
        { productId: '7', name: 'Acuvue Oasys (30 lenti)', quantity: 2, price: 35 },
      ],
    },
  ];

  private appointments: Appointment[] = [
    {
      id: '1',
      userId: '1',
      visitType: 'Controllo Vista',
      date: '2026-02-05',
      time: '10:30',
      status: 'confirmed',
      price: 0,
    },
    {
      id: '2',
      userId: '1',
      visitType: 'Visita Optometrica Completa',
      date: '2025-12-20',
      time: '15:00',
      status: 'completed',
      price: 50,
    },
  ];

  private visits: Visit[] = [
    {
      id: '1',
      userId: '1',
      date: '2024-12-15',
      type: 'Controllo Vista',
      category: 'occhiali',
      notes: 'Prescrizione aggiornata',
    },
    {
      id: '2',
      userId: '1',
      date: '2024-11-30',
      type: 'Ordine Lenti',
      category: 'lenti',
      notes: 'Acuvue Oasys x2 confezioni',
    },
  ];

  private prescriptions: Prescription[] = [
    {
      id: '1',
      userId: '1',
      rightEye: {
        sphere: '-2.50',
        cylinder: '-0.75',
        axis: '180',
        bc: '8.6',
      },
      leftEye: {
        sphere: '-2.25',
        cylinder: '-0.50',
        axis: '175',
        bc: '8.6',
      },
      brand: 'Acuvue Oasys',
      issueDate: '2024-11-15',
      isActive: true,
    },
  ];

  private messages: Message[] = [
    {
      id: '1',
      userId: '1',
      sender: 'optician',
      text: 'Ciao! Come posso aiutarti?',
      timestamp: new Date().toISOString(),
      isRead: true,
    },
  ];

  // Auth methods
  async login(email: string, password: string): Promise<User | null> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    }
    return null;
  }

  async register(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      ...userData,
      id: String(this.users.length + 1),
    };
    this.users.push(newUser);
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword as User;
  }

  // User methods
  async getUser(userId: string): Promise<User | null> {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword as User;
    }
    return null;
  }

  async updateUser(userId: string, data: Partial<User>): Promise<User | null> {
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...data };
      const { password, ...userWithoutPassword } = this.users[userIndex];
      return userWithoutPassword as User;
    }
    return null;
  }

  // Product methods
  async getProducts(category?: string): Promise<Product[]> {
    if (category) {
      return this.products.filter(p => p.category === category);
    }
    return this.products;
  }

  async getProduct(productId: string): Promise<Product | null> {
    return this.products.find(p => p.id === productId) || null;
  }

  // Order methods
  async getOrders(userId: string): Promise<Order[]> {
    return this.orders.filter(o => o.userId === userId);
  }

  async createOrder(orderData: Omit<Order, 'id'>): Promise<Order> {
    const newOrder: Order = {
      ...orderData,
      id: String(this.orders.length + 1),
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  // Appointment methods
  async getAppointments(userId: string): Promise<Appointment[]> {
    return this.appointments.filter(a => a.userId === userId);
  }

  async createAppointment(appointmentData: Omit<Appointment, 'id'>): Promise<Appointment> {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: String(this.appointments.length + 1),
    };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  // Visit methods
  async getVisits(userId: string, category?: string): Promise<Visit[]> {
    let visits = this.visits.filter(v => v.userId === userId);
    if (category) {
      visits = visits.filter(v => v.category === category);
    }
    return visits;
  }

  // Prescription methods
  async getPrescription(userId: string): Promise<Prescription | null> {
    return this.prescriptions.find(p => p.userId === userId && p.isActive) || null;
  }

  // Message methods
  async getMessages(userId: string): Promise<Message[]> {
    return this.messages.filter(m => m.userId === userId);
  }

  async sendMessage(messageData: Omit<Message, 'id'>): Promise<Message> {
    const newMessage: Message = {
      ...messageData,
      id: String(this.messages.length + 1),
    };
    this.messages.push(newMessage);
    return newMessage;
  }
}

export const db = new MockDatabase();
