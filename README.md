# Remind Me Later

A Next.js application that allows users to set up email reminders for future dates and times.

## Features

- 📅 Schedule reminders with date and time
- 📧 Email notification system
- ⏰ Automated reminder processing
- 🔄 Real-time status updates
- 🎯 Simple and intuitive UI

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Form Handling**: React Hook Form, Zod
- **Database**: MongoDB with Mongoose
- **Email**: Nodemailer
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- MongoDB database
- Gmail account (for sending emails)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
GOOGLE_APP_EMAIL=your_gmail_address
GOOGLE_APP_PASSWORD=your_gmail_app_specific_password
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/remind-me-later.git
cd remind-me-later
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
remind-me-later/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── InputForm.tsx
├── lib/
│   ├── actions/
│   │   └── reminder.actions.ts
│   ├── models/
│   │   └── reminder.ts
│   ├── connectdb.ts
│   └── input-form-validations.ts
└── public/
```

## Database Schema

### Reminder Model

```typescript
{
  date: string;      // Required: Reminder date
  time: string;      // Required: Reminder time
  message: string;   // Required: Reminder message
  email: string;     // Required: Recipient email
  status: string;    // Required: 'pending' | 'sent' | 'failed'
  createdAt: Date;   // Automatically added
  updatedAt: Date;   // Automatically added
}
```

## Features in Detail

### Reminder Creation
- Users can set a future date and time
- Input validation using Zod
- Real-time form feedback
- Success/error notifications

### Reminder Processing
- Automatic checking every minute
- Sends emails at the scheduled time
- Updates reminder status after processing
- Handles failed attempts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
