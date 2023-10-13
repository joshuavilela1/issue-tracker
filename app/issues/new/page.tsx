'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import SimpleMde from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssuePage() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register('title'));

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues');
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMde placeholder="Description" {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
}
