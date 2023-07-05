```typescript
export interface ContentCreator {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export interface Content {
  id: string;
  name: string;
  description: string;
  createat: Date;
}
```