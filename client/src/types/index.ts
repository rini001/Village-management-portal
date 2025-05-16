export interface Need {
  _id?: string;
  category: string;
  description: string;
  villageName: string;
  priority: 'High' | 'Medium' | 'Low';
  verificationStatus?: 'Verified' | 'Not Verified';
  progressStatus?: 'Pending' | 'In Progress' | 'Completed';
}

export interface AdminCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UpdateNeedBody {
  verificationStatus?: 'Verified' | 'Not Verified';
  progressStatus?: 'Pending' | 'In Progress' | 'Completed';
}
